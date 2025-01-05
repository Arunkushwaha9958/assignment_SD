CREATE TABLE Cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE States (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE Colleges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    score INT CHECK (
        score BETWEEN 1 AND 1000
    ),
    city_id INT REFERENCES Cities(id),
    state_id INT REFERENCES States(id)
);
CREATE TABLE College_Placement (
    id SERIAL PRIMARY KEY,
    college_id INT REFERENCES Colleges(id),
    year INT,
    highest_placement DECIMAL(10, 2),
    average_placement DECIMAL(10, 2),
    median_placement DECIMAL(10, 2),
    placement_rate DECIMAL(5, 2)
);
CREATE TABLE College_Wise_Course (
    id SERIAL PRIMARY KEY,
    college_id INT REFERENCES Colleges(id),
    course_name VARCHAR(255) NOT NULL,
    course_duration VARCHAR(50),
    course_fee DECIMAL(10, 2)
);