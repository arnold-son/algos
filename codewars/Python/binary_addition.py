#Implement a function that adds two numbers together and returns their sum in binary.
#The conversion can be done before, or after the addition.
#The binary number returned should be a string.

def add_binary(a,b):
# number validation steps: ... add later
# add the two numbers and create a blank string for storing the binary
    sum = a + b
    binaryString = ""
    print("the sum is:",sum)
    # loop begins here:
    while sum >= 2:
        print("leftover sum:",sum)
        # modulo sum by 2 => is it 1?(is it going to be a 1 or a 0 for the 2 ^ 0,1,2,3... digit?)
        # yes => record "1"
        if sum % 2 == 1:
            binaryString = "1" + binaryString
        # no => record "0" append to left-hand side of binaryString
        else:
            binaryString = "0" + binaryString
        # divide sum by 2 and round down => is it 1 or bigger?
        sum = sum // 2
        print("sum divided and rounded:", sum)
        # yes => repeat loop
        # no => return current binaryString with str(sum) appended to the left
    binaryString = str(sum) + binaryString
    return binaryString
