public class FindDivisor {

    public long numberOfDivisors(int n) {
        int QtdDivider = 0;
        for (int i = 1; i<= n ; i++){
            if((n % i) == 0){
                QtdDivider += 1;
            }
        }
        return QtdDivider;
    }

}

