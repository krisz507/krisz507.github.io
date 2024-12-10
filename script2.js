function calculateCalories() {
    const weight = document.getElementById('weight').value;
    if (weight) {
      const calories = weight * 35;
      document.getElementById('result').textContent = `Az ajánlott napi kalóriabevitel: ${calories} kcal.`;
    } else {
      document.getElementById('result').textContent = 'Kérlek, add meg a testsúlyodat!';
    }
  }
  