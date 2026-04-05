def solve():
    """
    Решает задачу для одного набора входных данных.
    """
    try:
        n, m = map(int, input().split())
        grid = []
        for _ in range(n):
            # Сразу преобразуем строку из '0' и '1' в список чисел
            grid.append([int(char) for char in input()])
    except (IOError, ValueError):
        # Обработка возможных ошибок ввода
        return

    # Если таблица слишком мала для квадрата 2x2, пересечений быть не может
    if n < 2 or m < 2:
        print("YES")
        return

    # Проверяем все возможные квадраты 2x2
    for i in range(n - 1):
        for j in range(m - 1):
            # Считаем сумму '1' в квадрате 2x2
            current_sum = grid[i][j] + grid[i+1][j] + grid[i][j+1] + grid[i+1][j+1]
            
            # Если сумма равна 3, значит, есть пересечение
            if current_sum == 3:
                print("NO")
                return
    
    # Если ни одного такого квадрата не найдено, пересечений нет
    print("YES")

def main():
    """
    Основная функция для обработки всех тестовых случаев.
    """
    try:
        t = int(input())
        for _ in range(t):
            solve()
    except (IOError, ValueError):
        # Обработка возможных ошибок ввода
        return

if __name__ == "__main__":
    main()