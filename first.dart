void main(){
    String? aa = null ?? "Guest";
    print(aa);
    String? s = stdin.readLineSync();
    int?  len = s?.length;
    print(len)
}