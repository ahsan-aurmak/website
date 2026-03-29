<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// CONFIGURATION
// Load local SMTP configuration (DO NOT COMMIT THE CONFIG FILE TO GIT)
$configPath = __DIR__ . '/../smtp_config.php';
if (!file_exists($configPath)) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['message' => 'Server configuration error: SMTP config missing.']);
    exit;
}
$smtpConfig = require_once($configPath); 
$contactTo = 'info@aurmak.com'; 
$careersTo = 'careers@aurmak.com';
$fromInfo = 'AURMAK <info@aurmak.com>';
$fromCareers = 'AURMAK <careers@aurmak.com>';

// LOGGING
function log_msg($msg) {
    file_put_contents('api_error.log', date('[Y-m-d H:i:s] ') . $msg . "\n", FILE_APPEND);
}

// SIMPLE SMTP CLIENT (Minified)
class SimpleSmtp {
    private $conn; private $user; private $pass; private $host; private $port;
    public function __construct($h, $p, $u, $pass) { $this->host=$h;$this->port=$p;$this->user=$u;$this->pass=$pass; }
    private function exec($cmd, $code) {
        if ($cmd !== null) fwrite($this->conn, $cmd . "\r\n");
        $res = "";
        while ($line = fgets($this->conn, 515)) {
            $res .= $line;
            if (substr($line, 3, 1) === " ") break;
        }
        if (substr($res, 0, 3) != $code) throw new Exception("SMTP Error: " . trim($res));
        return $res;
    }
    public function send($from, $to, $subject, $body, $html = true, $attachments = [], $replyTo = null) {
        $this->conn = @fsockopen($this->host, $this->port, $errno, $errstr, 10);
        if (!$this->conn) throw new Exception("Connection failed: $errstr");
        $this->exec(null, 220); 
        $this->exec("EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost'), 250);
        $this->exec("AUTH LOGIN", 334);
        $this->exec(base64_encode($this->user), 334);
        $this->exec(base64_encode($this->pass), 235);
        $envFrom = preg_match('/<([^>]+)>/', $from, $m) ? $m[1] : $from;
        $this->exec("MAIL FROM:<$envFrom>", 250);
        foreach((array)$to as $t) $this->exec("RCPT TO:<$t>", 250);
        $this->exec("DATA", 354);
        
        $boundary = md5(time());
        $headers = "Subject: $subject\r\nDate: " . date('r') . "\r\nFrom: $from\r\nTo: " . implode(',', (array)$to) . ($replyTo ? "\r\nReply-To: $replyTo" : "") . "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"$boundary\"\r\n\r\n";
        $content = "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$body\r\n\r\n";
        
        foreach($attachments as $a) {
            $content .= "--$boundary\r\nContent-Type: {$a['type']}; name=\"{$a['name']}\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"{$a['name']}\"\r\n\r\n" . chunk_split(base64_encode($a['content'])) . "\r\n";
        }
        $content .= "--$boundary--\r\n.";
        
        $this->exec($headers . $content, 250);
        $this->exec("QUIT", 221);
        fclose($this->conn);
    }
}

// ROUTING
$route = $_GET['route'] ?? str_replace('/api/', '', $_SERVER['REQUEST_URI']);
$route = explode('?', $route)[0];

try {
    $smtp = new SimpleSmtp($smtpConfig['host'], $smtpConfig['port'], $smtpConfig['user'], $smtpConfig['pass']);
    
    if ($route === 'contact') {
        $input = json_decode(file_get_contents('php://input'), true);
        if (!$input) throw new Exception("Invalid input");
        
        // Basic Validation
        if (empty($input['fullName']) || empty($input['email'])) throw new Exception("Full Name and Email are required.");
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) throw new Exception("Invalid email address.");
        
        $body = '
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #000; padding: 20px; text-align: center;">
                <h2 style="color: #fff; margin: 0;">AURMAK Contact Enquiry</h2>
            </div>
            <div style="padding: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($input['fullName'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($input['email'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($input['company'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($input['service'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Brief</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . nl2br(htmlspecialchars($input['brief'] ?? 'N/A')) . '</td></tr>
                </table>
            </div>
        </div>';
        
        // Notify internal team
        $smtp->send($fromInfo, $contactTo, "AURMAK Enquiry | " . ($input['fullName'] ?? 'Web'), $body, true, [], $input['email'] ?? null);

        // Automated response to the sender
        try {
            $confirmBody = '
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #000; padding: 20px; text-align: center;"><h2 style="color: #fff; margin:0;">AURMAK</h2></div>
                <div style="padding: 20px;">
                    <h3>Hi ' . htmlspecialchars($input['fullName'] ?? 'there') . ',</h3>
                    <p>Thank you for reaching out. We have received your enquiry regarding <strong>' . htmlspecialchars($input['service'] ?? 'our services') . '</strong> and our team is already reviewing it.</p>
                    <p>You can expect a response within 24-48 business hours.</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">This is an automated confirmation of your request. Please do not reply directly to this email.</p>
                </div>
            </div>';
            $smtp->send($fromInfo, $input['email'], "We have received your enquiry | AURMAK", $confirmBody, true, [], $contactTo);
        } catch(Exception $e) { log_msg("Autoresponse failed: " . $e->getMessage()); }

        echo json_encode(['message' => 'Enquiry submitted successfully.']);
    } 
    else if ($route === 'apply') {
        // Strict Validation
        if (empty($_POST['fullName']) || empty($_POST['email']) || empty($_POST['phone'])) throw new Exception("Name, Email and Phone are required.");
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) throw new Exception("Invalid email address.");
        if (!preg_match('/^[0-9\-\+\(\)\s]{7,25}$/', $_POST['phone'])) throw new Exception("Please provide a valid phone number (e.g. +44 123 4567).");

        // File Security
        $attachments = [];
        if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
            if ($_FILES['cv']['size'] > 5 * 1024 * 1024) throw new Exception("CV file too large (max 5MB).");
            $allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!in_array($_FILES['cv']['type'], $allowed)) throw new Exception("CV must be PDF or Word document.");
            
            $attachments[] = [
                'name' => $_FILES['cv']['name'],
                'type' => $_FILES['cv']['type'],
                'content' => file_get_contents($_FILES['cv']['tmp_name'])
            ];
        }

        $body = '
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #000; padding: 20px; text-align: center;">
                <h2 style="color: #fff; margin: 0;">AURMAK Careers Application</h2>
            </div>
            <div style="padding: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($_POST['fullName'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($_POST['email'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($_POST['phone'] ?? 'N/A') . '</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Role</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . htmlspecialchars($_POST['jobTitle'] ?? 'N/A') . ' (' . htmlspecialchars($_POST['jobCode'] ?? 'N/A') . ')</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Note</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">' . nl2br(htmlspecialchars($_POST['note'] ?? 'N/A')) . '</td></tr>
                </table>
            </div>
        </div>';
        
        $attachments = [];
        if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
            $attachments[] = [
                'name' => $_FILES['cv']['name'],
                'type' => $_FILES['cv']['type'],
                'content' => file_get_contents($_FILES['cv']['tmp_name'])
            ];
        }
        
        // Notify HR
        $smtp->send($fromCareers, $careersTo, "AURMAK Application | " . ($_POST['jobTitle'] ?? 'General') . " | " . ($_POST['fullName'] ?? 'Web'), $body, true, $attachments, $_POST['email'] ?? null);

        // Automated response to candidate
        try {
            $candidateBody = '
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #000; padding: 20px; text-align: center;"><h2 style="color: #fff; margin: 0;">AURMAK Careers</h2></div>
                <div style="padding: 20px;">
                    <h3>Hi ' . htmlspecialchars($_POST['fullName'] ?? 'there') . ',</h3>
                    <p>Thank you for your interest in joining AURMAK! We have successfully received your application for the <strong>' . htmlspecialchars($_POST['jobTitle'] ?? 'selected') . '</strong> position.</p>
                    <p>Our recruitment team is currently reviewing all applications. If your profile matches our requirements, we will reach out to schedule an initial interview.</p>
                    <p>Thank you for your time and we wish you the best of luck!</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">Best Regards,<br>AURMAK HR Team</p>
                </div>
            </div>';
            $smtp->send($fromCareers, $_POST['email'], "Application Received: " . ($_POST['jobTitle'] ?? 'Position') . " | AURMAK", $candidateBody, true, [], $careersTo);
        } catch(Exception $e) { log_msg("Autoresponse failed: " . $e->getMessage()); }

        echo json_encode(['message' => 'Application submitted successfully.']);
    } 
    else {
        throw new Exception("Route not found: $route");
    }
} catch (Exception $e) {
    log_msg($e->getMessage());
    http_response_code(500);
    echo json_encode(['message' => 'Internal server error: ' . $e->getMessage()]);
}
