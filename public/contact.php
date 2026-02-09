<?php
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["error" => "Method not allowed"]);
  exit;
}

$raw = file_get_contents("php://input");
$data = [];
if ($raw) {
  $decoded = json_decode($raw, true);
  if (is_array($decoded)) {
    $data = $decoded;
  }
}

if (!$data) {
  $data = $_POST;
}

$name = isset($data["name"]) ? trim($data["name"]) : "";
$email = isset($data["email"]) ? trim($data["email"]) : "";
$phone = isset($data["phone"]) ? trim($data["phone"]) : "";
$city = isset($data["city"]) ? trim($data["city"]) : "";
$message = isset($data["message"]) ? trim($data["message"]) : "";

if ($name === "" || $message === "") {
  http_response_code(400);
  echo json_encode(["error" => "Eksik alan"]);
  exit;
}

$to = "officialsongulbabacan@gmail.com";
$subject = "Farmasi Üyelik Başvurusu: " . $name;

$lines = [
  "Farmasi Üyelik Başvurusu",
  "Ad Soyad: " . $name,
  "Telefon: " . ($phone ?: "-"),
  "Şehir: " . ($city ?: "-"),
  "E-posta: " . ($email ?: "-"),
  "",
  "Mesaj: " . $message
];

$body = implode("\n", $lines);

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: Songul Babacan <no-reply@songulbabacan.com>";
if ($email) {
  $headers[] = "Reply-To: " . $email;
}

$ok = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$ok) {
  http_response_code(500);
  echo json_encode(["error" => "E-posta gönderilemedi"]);
  exit;
}

echo json_encode(["ok" => true]);
