package kata

func SmallestIntegerFinder(numbers []int) int {
	a := numbers[0]

	for _, number := range numbers {
		if a >= number {
			a = number
		}
	}
	return a
}
