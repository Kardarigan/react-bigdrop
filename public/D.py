import schedule
import time
import win10toast

toaster = win10toast.ToastNotifier()

def send_notification():
    title = "🧛‍♂️"
    message = "Concentrate!"
    toaster.show_toast(title, message, duration=3)

schedule.every(1).hours.do(send_notification) 

while True:
    schedule.run_pending()
    time.sleep(1)
