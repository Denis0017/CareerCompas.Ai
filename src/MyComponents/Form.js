// Form.js
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all 38 fields are filled
    const allFieldsFilled = Object.keys(formData).length === 38;

    // Check if any field is empty
    const anyFieldEmpty = Object.values(formData).some((value) => value === '');

    if (allFieldsFilled && !anyFieldEmpty) {
      console.log(Object.values(formData));
      // Add logic for form submission
      setFormError(null);
      setFormSubmitted(true);
    } else {
      setFormError('Please fill in all 38 fields.');
    }
  };

  const resetForm = () => {
    setFormData({});
    setFormError(null);
    setFormSubmitted(false);
  };

  const fieldTitles = [
    "Acedamic percentage in Operating Systems",
    "Percentage in Algorithms",
    "Percentage in Programming Concepts",
    "Percentage in Software Engineering",
    "Percentage in Computer Networks",
    "Percentage in Electronics Subjects",
    "Percentage in Computer Architecture",
    "Percentage in Mathematics",
    "Percentage in Communication skills",
    "Hours working per day",
    "Logical quotient rating",
    "Hackathons",
    "Coding skills rating",
    "Public speaking points",
    "Can work long time before system?",
    "Self-learning capability?",
    "Extra-courses did",
    "Certifications",
    "Workshops",
    "Talent tests taken?",
    "Olympiads",
    "Reading and writing skills",
    "Memory capability score",
    "Interested subjects",
    "Interested career area",
    "Job/Higher Studies?",
    "Type of company want to settle in?",
    "Taken inputs from seniors or elders",
    "Interested in games",
    "Interested Type of Books",
    "Salary Range Expected",
    "In a Relationship?",
    "Gentle or Tough behavior?",
    "Management or Technical",
    "Salary/work",
    "Hard/smart worker",
    "Worked in teams ever?",
    "Introvert",
  ];

  const fieldRanges = [
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { min: 0, max: 100 },
    { options: ["yes", "no"] },
    { options: ["yes", "no"] },
    { options: ["yes", "no"] },
    { options: ["shell programming", "app development", "distro making", "full stack", "hadoop", "information security", "machine learning", "python", "r programming"] },
    { options: ["cloud computing", "data science", "database security", "game development", "hacking", "system designing", "testing", "web technologies"] },
    { options: ["yes", "no"] },
    { options: ["yes", "no"] },
    { options: ["poor", "medium", "excellent"] },
    { options: ["poor", "medium", "excellent"] },
    { options: ["cloud computing", "Computer Architecture", "data engineering", "hacking", "IOT", "Management", "networks", "parallel computing", "programming", "Software Engineering"] },
    { options: ["Business process analyst", "cloud computing", "developer", "security", "system developer", "testing"] },
    { options: ["job", "higher studies"] },
    { options: ["BPA", "Cloud Services", "Finance", "Product based", "product development", "SAaS services", "Sales and Marketing", "Service Based", "Testing and Maintainance Services", "Web Services"] },
    { options: ["yes", "no"] },
    { options: ["yes", "no"] },
    { options: ["Action and Adventure", "Anthology", "Art", "Autobiographies", "Biographies", "Childrens", "Comics", "Cookbooks", "Diaries", "Dictionaries", "Drama", "Encyclopedias", "Fantasy", "Guide", "Health", "History", "Horror"] },
    { options: ["salary", "work"] },
    { options: ["yes", "no"] },
    { options: ["stubborn", "gentle"] },
    { options: ["Management", "Technical"] },
    { options: ["salary", "work"] },
    { options: ["smart worker", "hard worker"] },
    { options: ["yes", "no"] },
    { options: ["yes", "no"] },
    { options: ["Applications Developer", "Business Intelligence Analyst", "Business Systems Analyst", "CRM Business Analyst", "CRM Technical Developer", "Data Architect", "Database Administrator", "Database Developer", "Database Manager", "Design & UX", "E Commerce Analyst", "Information Security Analyst", "Information Technology Auditor", "Information Technology Manager", "Mobile Applications Developer", "Network Engineer", "Network Security Administrator", "Network Security Engineer", "Portal Administrator", "Programmer Analyst", "Project Manager", "Quality Assurance Associate", "Software Developer", "Software Engineer", "Software Quality Assurance (QA) / Testing", "Software Systems Engineer", "Solutions Architect", "Systems Analyst", "Systems Security Administrator", "Technical Engineer", "Technical Services/Help Desk/Tech Support", "Technical Support", "UX Designer", "Web Developer"] },
  ];

  return (
    <div>
      {formSubmitted ? (
        <div>
          <h2>Form Values:</h2>
          <pre>{JSON.stringify(Object.values(formData), null, 2)}</pre>
          <button onClick={resetForm}>Submit Another Form</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {fieldTitles.map((title, index) => (
            <div key={index} className="my-2">
              <label htmlFor={`field-${index + 1}`}>{title}</label>
              {fieldRanges[index].options ? (
                <select
                  id={`field-${index + 1}`}
                  name={`field-${index + 1}`}
                  onChange={handleChange}
                  value={formData[`field-${index + 1}`] || ''}
                  className="form-control"
                >
                  <option value=""></option>
                  {fieldRanges[index].options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input type="number" id={`field-${index + 1}`} name={`field-${index + 1}`} min={fieldRanges[index].min} max={fieldRanges[index].max} onChange={handleChange} className="form-control"/>
              )}
            </div>
          ))}
          {formError && <div className="text-danger">{formError}</div>}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
