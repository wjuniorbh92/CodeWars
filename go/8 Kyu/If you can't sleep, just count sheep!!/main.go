package kata

import "strconv"

func countSheep(num int) string {
	countSheep := ""

	for i := 1; i <= num; i++ {
		countSheep += strconv.Itoa(i) + " sheep..."
	}
	return countSheep
}
