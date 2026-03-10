import math

# Ввод данных
a_cap = int(input())
b_cap = int(input())
n = int(input())

# Проверка на Impossible (математическое правило)
if n > a_cap and n > b_cap:
    print("Impossible")
elif n % math.gcd(a_cap, b_cap) != 0:
    print("Impossible")
else:
    # Текущее количество воды в сосудах
    a_now = 0
    b_now = 0

    # Цикл: пока ни в одном сосуде нет N литров
    while a_now != n and b_now != n:
        if a_now == 0:
            # 1. Если A пустой — наполняем его
            a_now = a_cap
            print(">A")
        elif b_now == b_cap:
            # 2. Если B полный — выливаем его
            b_now = 0
            print("B>")
        else:
            # 3. Иначе переливаем из A в B до краев или пока A не опустеет
            # Сколько можем залить в B?
            can_pour = b_cap - b_now
            # Сколько реально перельем? (минимум из того что есть и того что влезет)
            amount = min(a_now, can_pour)
            
            a_now -= amount
            b_now += amount
            print("A>B")