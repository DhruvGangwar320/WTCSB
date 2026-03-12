// void main(){
// List<int> num = [1,2,3,4,5,6,7];
// // List comprehension
// num.add(23);
// num.remove(2);
// num.removeAt(0);
// num.removeLast();
// print(num);
// }// function newList(...num)
// // {
// //     List<int> num2 = [];
// //     for(int i  =0 ; i < num.length ;i++){
// //     if(num[i]>10)
// //     num2.append(num[i]);}
// //     return num2;
// // }
List<int> ret(List<int> num)
{
    List<int> num2 = [];
    for(int i = 0 ; i < num.length ;i++)
    {
        if(num[i]>10) num2.add(num[i]);
    }
    return num2;
}
void main()
{
    List<int> num = [4, 11, 8, 25, 10, 50];
    var l = ret(num);
    print(l);
}
List<int> greaterThan20(List<int> nums) {
    List<int> a = [];
    // for(int i = 0 ; i < nums.length ;i++)
    // {
    //     if(nums[i] > 20) a.add(nums[i]);
    // }
    // return a;
    // return nums.where((n)=> n > 20).toList();
    for(var i in nums)
    {
        a.add(i);
    }
    return a;
}
List<int> removeDuplicates(List<int> nums)
{
    Set<int> uq = {};
    for(var i in nums)
        uq.add(i);
    
}
import 'dart:math';
int find(List<int> nums) {
    return nums.reduce(max) , nums.reduce(min) , nums.reduce((a,b)=> a+b);
}
// Map
