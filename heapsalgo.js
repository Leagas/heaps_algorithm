// heaps algorithm for generating permutations

function calcFactorial(length) {
	let total = 1;

	for (let i=2; i <= length; i++) {
		total = total * i;
	};

	return total;
};

function getPermutations(s, length, res) {
	if (length == 1) {
		res.push(s.join(""))
	}

	for (let i=0;i<length;i++) {
		getPermutations(s, length-1, res)
		if (length%2 == 1) {
			let temp = [...s]
			s[0] = temp[length-1]
			s[length-1] = temp[0]
		} else {
			let temp = [...s]
			s[i] = temp[length-1]
			s[length-1] = temp[i]
		}
	}

	return res
};

function main(s) {
	// total number of permutations
	const total = calcFactorial(s.length);

	s = s.split("")
	s.sort();

	// generate all permutations
	let permutations = getPermutations(s, s.length, []);


	return permutations
};

console.log(main("settle"))
