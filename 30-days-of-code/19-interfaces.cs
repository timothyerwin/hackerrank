using System;
public interface AdvancedArithmetic{
    int divisorSum(int n);
}
public class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        var total = 0;

        for(var x = 1; x <= n; x++) {
          if(n % x == 0) {
            total += x;
          }
        }

        return total;
    }
}
class Solution{
    static void Main(string[] args){
        int n = Int32.Parse(Console.ReadLine());
      	AdvancedArithmetic myCalculator = new Calculator();
        int sum = myCalculator.divisorSum(n);
        Console.WriteLine("I implemented: AdvancedArithmetic\n" + sum); 
    }
}
