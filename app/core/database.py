from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# 数据库连接字符串：本地开发使用 SQLite，对应在当前目录下生成 calculator.db 文件
SQLALCHEMY_DATABASE_URL = "sqlite:///./calculator.db"

# 创建 Engine（由于 SQLite 的特性，需要配置 check_same_thread=False）
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# 创建会话工厂
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 创建基类，用于 ORM 模型继承
Base = declarative_base()

# 获取数据库会话的依赖函数，供 API 接口使用
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
