import BASE_URL from "./apiConfig.jsx";

function treatHTTPResponseACB(response) {
  if (response.status !== 200) throw "HTTP response is not 200";
  else {
    return response.json();
  }
}

export async function retreivePracticeQuizQuestions(category, difficulty) {
  let params = {
    amount: "5",
    category: category,
    difficulty: difficulty,
    type: "multiple",
  };
  const response = await fetch(BASE_URL + new URLSearchParams(params));
  const data = await treatHTTPResponseACB(response);
  return data.results;
}

export async function retreiveSeasonQuizQuestions(quizNumber) {
  let difficulty = "";
  switch (quizNumber) {
    case 1:
    case 2:
      difficulty = "easy";
      break;
    case 3:
    case 4:
      difficulty = "medium";
      break;
    case 5:
      difficulty = "hard";
  }
  const category = Math.floor(Math.random() * 24) + 9;
  let params = {
    amount: "5",
    category: category,
    difficulty: difficulty,
    type: "multiple",
  };
  const response = await fetch(BASE_URL + new URLSearchParams(params));
  const data = await treatHTTPResponseACB(response);
  return data.results;
}
