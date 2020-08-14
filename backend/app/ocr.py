from PIL import Image
from pytesseract import image_to_string
import re

def ocr(img_path):
    test = image_to_string(Image.open(img_path))
    return list(filter(lambda x: re.match(r"[a-zA-Z]+", x), test.split('\n')))