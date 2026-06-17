l = []

class EmptyTaskError(Exception):
    pass

def add_task():
    try:
        task = input("Enter task: ")

        if task.strip() == "":
            raise EmptyTaskError("Task cannot be empty")

        l.append(task)

    except EmptyTaskError as e:
        print(e)

def remove_task():
    i = int(input("Enter task number: "))
    l.pop(i - 1)
    print("Task removed successfully")

def task_status():
    print("1. Task completed")
    print("2. Task pending")

    status = int(input("Enter task status: "))

    if status == 1:
        print("🥳 Hurray! Task completed 🥳")
    else:
        print("😢 Oops! Task pending 😢")

def show_task():
    for task in l:
        print(task)
