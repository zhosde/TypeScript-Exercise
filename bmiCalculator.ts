interface BmiValues {
  value1: number;
  value2: number;
}

const parseBMIArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const bmiCalculator = (a: number, b: number) => {
  let result = +(b / Math.pow(a / 100, 2)).toFixed(1);
  let message
  switch (true) {
    case result < 18.5:
      message = "Unterweight (unhealthy)"
      console.log(message)
      return message
      break;
    case result >= 18.5 && result <= 22.9:
      message = "Normal (healthy weight)"
      console.log(message)
      return message
      break;
    case result >= 23 && result <= 24.9:
      message = "At risk (overweight)"
      console.log(message)
      return message
      break;
    case result >= 25 && result <= 29.9:
      message = "Moderately obese (overweight)"
      console.log(message)
      return message
      break;
    case result >= 30:
      message = "Severely obese (overweight)"
      console.log(message)
      return message
      break;
    default: return 0
  }
};

try {
  const { value1, value2 } = parseBMIArguments(process.argv);
  bmiCalculator(value1, value2);
} catch (e) {
  console.log("Error, something bad happened, message: ", e.message);
}

export default bmiCalculator;
