

public class Triangular {
    public boolean isTriangular(int T){
        int sum = 0;

        for (int n = 1; sum <= T; n++)
        {
            sum = sum + n;
            if (sum == T)
                return true;
        }

        return false;
    }


}
