binary_str = input()
decimal_value = 0

n = len(binary_str)

for i in range(n):
    digit = int(binary_str[i])
    power = n - 1 - i
    decimal_value += digit * (2 ** power)

print(decimal_value)