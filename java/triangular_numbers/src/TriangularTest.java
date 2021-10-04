import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TriangularTest
{
    Triangular triangular = new Triangular();
    @Test
    public void TriangularTests()
    {
        assertEquals(true, triangular.isTriangular(6));
    }

}


