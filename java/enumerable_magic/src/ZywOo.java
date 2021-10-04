import java.util.Arrays;

public class ZywOo {
    public static int[] take(int[] arr, int n) {
        return n > arr.length ? arr : Arrays.copyOf(arr, n);
    }
}
