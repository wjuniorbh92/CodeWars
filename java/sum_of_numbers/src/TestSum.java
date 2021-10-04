import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TestSum {
    Sum s = new Sum();

    @Test
    public void Test1()
    {
        assertEquals(1, s.GetSum(0, 1));
        assertEquals(-1, s.GetSum(0, -1));

    }

}
