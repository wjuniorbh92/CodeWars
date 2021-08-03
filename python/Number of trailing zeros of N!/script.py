def zeros(n):
    x = 0
    while n > 0:
        n = int(n/5)
        x += n
    return x