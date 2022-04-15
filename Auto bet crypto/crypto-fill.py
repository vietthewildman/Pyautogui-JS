import pyautogui
import time
import datetime
import socket
import random
import subprocess
import os 

def get_wifi_info():
	process = subprocess.Popen(['/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport','-I'], stdout=subprocess.PIPE)
	out, err = process.communicate()
	process.wait()

	wifi_info = {}
	for line in out.decode("utf-8").split("\n"):
		if ": " in line:
			key, val = line.split(": ")
			key = key.replace(" ", "")
			val = val.strip()

			wifi_info[key] = val

	return wifi_info

def internet(host="8.8.8.8", port=53, timeout=3):
    """
    Host: 8.8.8.8 (google-public-dns-a.google.com)
    OpenPort: 53/tcp
    Service: domain (DNS/TCP)
    """
    try:
        socket.setdefaulttimeout(timeout)
        socket.socket(socket.AF_INET, socket.SOCK_STREAM).connect((host, port))
        return True
    except socket.error as ex:
        print(ex)
        return False

def bet():
	# Click vao tab 1
	pyautogui.click(226, 49)
	time.sleep(1)
	pyautogui.click(199, 703)
	time.sleep(1)
	pyautogui.press('up')
	time.sleep(1)	
	pyautogui.press('enter')

def re_check():
	# Click vao tab 2
	pyautogui.click(446, 49)
	time.sleep(1)
	pyautogui.hotkey('command', 'r')
	time.sleep(10)
	pyautogui.click(199, 703)
	time.sleep(1)
	pyautogui.press('up')
	time.sleep(1)	
	pyautogui.press('enter')
	
def re_check_intense():
	pyautogui.click(446, 49)
	time.sleep(1)
	pyautogui.hotkey('command', 'r')
	time.sleep(30)
	pyautogui.click(199, 703)
	time.sleep(1)
	pyautogui.press('up')
	time.sleep(1)	
	pyautogui.press('enter')

def chrome(a):
	
	if get_wifi_info()["SSID"] != 'P1411':
		exit()
	# click onto chrome
	pyautogui.click(574, 762)
	time.sleep(1)	
	# Bet
	bet()
	
	# # test
	# time.sleep(1)
	# os.system("networksetup -setairportpower airport off")
	# time.sleep(0.5)
	# os.system("networksetup -setairportpower airport on")

	time.sleep(20)
	# Check internet connection
	if get_wifi_info()["SSID"] != 'P1411':
		while internet() == False:
			time.sleep(5)
		# Has connected!
		re_check_intense()
		time.sleep(60)
		re_check_intense()
		time.sleep(30)
		exit()

	

	# The purpose here is to remember the re-checking code
	if a % 4 == 0:
		re_check()
		time.sleep(15)
		pyautogui.click(226, 49)

def brave(b):
	if get_wifi_info()["SSID"] != 'P1411':
		exit()
	# click onto brave
	pyautogui.click(476, 762)
	time.sleep(1)	
	# Bet
	bet()
	
	# Check internet connection
	if internet() == False:
		while internet() == False:
			time.sleep(5)
		# Has connected!
		re_check_intense()
		time.sleep(30)
		re_check()
		time.sleep(30)
		exit()

	time.sleep(10)
		
	# The purpose here is to remember the re-checking code
	if b % 4 == 0:
		re_check()
		time.sleep(20)
		pyautogui.click(226, 49)

a = 0
# b = 2
while True:
	a = a + 1
	# b = b + 1

	chrome(a)
	# time.sleep(2)
	# brave(b)

	phut = datetime.datetime.now().minute
	giay = datetime.datetime.now().second
	wait_time = 300 - ((phut % 5) * 60 + giay ) +35
	time.sleep(wait_time)
	


