from sqlalchemy import Column, Integer, String, Float, ForeignKey, Date, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(20), unique=True)
    password_hash = Column(String(255))
    created_at = Column(DateTime)

class Farm(Base):
    __tablename__ = 'farms'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String(100))
    location = Column(String(255))
    area = Column(Float)
    soil_type = Column(String(50))
    water_source = Column(String(100))

class Livestock(Base):
    __tablename__ = 'livestock'
    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey('farms.id'))
    animal_type = Column(String(50))
    count = Column(Integer)
    age_group = Column(String(50))

class Crop(Base):
    __tablename__ = 'crops'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    category = Column(String(50))
    growing_season = Column(String(50))
    water_req = Column(String(50))
    soil_req = Column(String(50))

class Recommendation(Base):
    __tablename__ = 'recommendations'
    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey('farms.id'))
    crop_id = Column(Integer, ForeignKey('crops.id'))
    score = Column(Float)
    season = Column(String(50))
    created_at = Column(DateTime)

class FinancialPlan(Base):
    __tablename__ = 'financial_plans'
    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey('farms.id'))
    crop_id = Column(Integer, ForeignKey('crops.id'))
    costs = Column(Float)
    revenue = Column(Float)
    profit = Column(Float)

class WeatherData(Base):
    __tablename__ = 'weather_data'
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String(255))
    date = Column(Date)
    temperature = Column(Float)
    rainfall = Column(Float)
    humidity = Column(Float)

class MarketPrice(Base):
    __tablename__ = 'market_prices'
    id = Column(Integer, primary_key=True, index=True)
    crop_id = Column(Integer, ForeignKey('crops.id'))
    location = Column(String(255))
    price = Column(Float)
    date = Column(Date)
    quality_grade = Column(String(50))
