package kata

import "math"

func TwiceAsOld(dadYearsOld, sonYearsOld int) int {
	twiceOldSon := sonYearsOld + sonYearsOld
	return int(math.Abs(float64(dadYearsOld - twiceOldSon)))
}
