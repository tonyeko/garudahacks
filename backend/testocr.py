from PIL import Image
from pytesseract import image_to_string
import re

test = image_to_string(Image.open('./images/tc3.jpg'))
print(list(filter(lambda x: re.match(r"[a-zA-Z]+", x), test.split('\n'))))

# Install tesseract: https://stackoverflow.com/questions/50655738/how-do-i-resolve-a-tesseractnotfounderror