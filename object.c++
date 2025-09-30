#include <iostream>
using namespace std;
int main()
{
    int Array[6] = { 0,1,2,3,4,5 }; //  adress : Array[0]= 2020   
    int* ptr1;
    int* ptr2;

    ptr1 = &Array[0]; // ptr1 =2020
    cout << *ptr1 << "    " << ptr1 << endl; // *ptr1 =0   ptr1 = 2020
    ptr1 = ptr1 + 4; // adress ptr1 = adress array[5]         *ptr1 =4 


    cout << *ptr1 << "     " << ptr1 << endl ;    // *ptr1 =2020    ptr1 = adress array[5]
    ptr1 -= 2; // ptr1 = adress array[3]     *ptr1 = 3  
    cout << *ptr1 << "    " << ptr1 << endl; 

    ptr2 = &Array[1];
    if (ptr1 != ptr2)
        cout << ptr1 - ptr2 << endl;
    else
        cout << ptr2 - ptr1;




    return 0;
}