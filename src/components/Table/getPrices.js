function getWithoutPlanPrice(time, priceByMin) {
  return (time * priceByMin).toFixed(2);
}

function getWithPlanPrice(time, priceByMin, tax = 1.1) {
  return (time * priceByMin * tax).toFixed(2)
}


export function getPrices(origin, destination, plan, time) {
  if (plan === "FaleMais30") {
    plan = 30;
  } else if (plan === "FaleMais60") {
    plan = 60;
  } else if (plan === "FaleMais120") {
    plan = 120;
  }

  let x;
  if (time - plan > 0) {
    x = time - plan;
  } else x = 0;

  if (origin === "011" && destination === "016") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 1.9),
      withPlan: getWithPlanPrice(x, 1.9)
    };
  } else if (origin === "011" && destination === "017") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 1.7),
      withPlan: getWithPlanPrice(x, 1.7)
    };
  } else if (origin === "011" && destination === "018") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 0.9),
      withPlan: getWithPlanPrice(x, 0.9)
    };
  } else if (origin === "016" && destination === "011") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 2.9),
      withPlan: getWithPlanPrice(x, 2.9)
    };
  } else if (origin === "017" && destination === "011") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 2.7),
      withPlan: getWithPlanPrice(x, 2.7)
    };
  } else if (origin === "018" && destination === "011") {
    return {
      withoutPlan: getWithoutPlanPrice(time, 1.9),
      withPlan: getWithPlanPrice(x, 1.9)
    };
  } else {
    return {
      withoutPlan: 'Não há ofertas para esta opção',
      withPlan: 'Não há ofertas para esta opção'
    }
  }
}
