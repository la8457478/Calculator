import akshare as ak

def explore_ak():
    print("Searching for futures functions in akshare...")
    futures_funcs = [f for f in dir(ak) if 'futures' in f]
    for f in futures_funcs:
        print(f)

if __name__ == "__main__":
    explore_ak()
