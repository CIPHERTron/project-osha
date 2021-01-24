import cv2
import os
import time
import uuid # name image files

IMAGES_PATH = 'images/collectedImages'

labels = ['hello', 'thanks', 'yes', 'no', 'iloveyou']
number_images = 15 # 13 for train and 2 for test

# collecting images
for label in labels:
    cwd = os.path.dirname(os.getcwd())
    directory = 'ASL-to-speech\images\collectedImages\\' + label
    path = os.path.join(cwd, directory)
    os.mkdir(path)
    cap = cv2.VideoCapture(0) # change the number as per your device
    print('Collecting images for {}'.format(label))
    time.sleep(5)
    for imgnum in range(number_images):
        ret, frame = cap.read()
        imgname = os.path.join(IMAGES_PATH, label, label+'.'+'{}.jpg'.format(str(uuid.uuid1())))
        cv2.imwrite(imgname, frame)
        cv2.imshow('frame', frame)
        time.sleep(2)

        if cv2.waitKey(1) & 0xff == ord('q'):
            break
    
    cap.release()