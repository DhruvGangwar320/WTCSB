void main()
{
    Map<String,int> hmap ={} ;
    hmap['dhruv'] = 1;
    hmap.forEach((key,value)=>print('$key and $value'));
      for (var key in hmap.keys) {
    print('$key and ${hmap[key]}');
  }
    }