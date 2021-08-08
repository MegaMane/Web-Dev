print("Hello World!")

running = True

while running:
    prompt = input("Say something ...\n")
    if prompt == "stop":
        break
    else:
        print("you said " + prompt)
