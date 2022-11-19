const Form = document.getElementById("form");
const formData = new Map();

const formSubmitHandler = (event) => {
  event.preventDefault();
  formDataGetter(Form);
  const swordParameters = swordCounter(
    formData.get("height"),
    formData.get("weight"),
    formData.get("palmWidth"),
    formData.get("sex")
  );
};

const formDataGetter = (node) => {
  const { elements } = node;
  Array.from(elements).forEach((element) => {
    if (element.name !== "") {
      formData.set(element.name, element.value);
    }
  });
};

const swordCounter = (height, weight, palmWidth, sex) => {
  if (sex == "female") {
    return (swordParameters = {
      length: (height / 3) * 2,
      weight: Math.round(((weight - 40) / 0.09) * 0.5 + 1100) - 150,
      handleLength: palmWidth * 2 + 5,
    });
  }
  return (swordParameters = {
    length: (height / 3) * 2,
    weight: Math.round(((weight - 40) / 0.09) * 0.5 + 1100),
    handleLength: palmWidth * 2 + 5,
  });
};

Form.addEventListener("submit", formSubmitHandler);
