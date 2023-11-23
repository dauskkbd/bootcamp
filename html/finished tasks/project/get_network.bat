echo off
echo Getting network information
ipconfig /all > network.txt
type network.txt
echo Network information saved to network.txt
pause