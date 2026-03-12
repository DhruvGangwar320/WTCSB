Future<int> getNumber() async {
  await Future.delayed(Duration(seconds: 4));
  return 10;
}

void main() async {
  int result = await getNumber();
  print('Hello');
  print(result);
}