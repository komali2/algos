describe('Linked List', () => {
  it('should exist', () => {
    expect(LinkedList).toBeDefined();
  });

  var list = new LinkedList(3);
  it('should be able to instatiate linkedlists', () => {
    expect(list instanceof LinkedList).toBe(true);
  });
  //3
  it('should have a functioning addFirst method', () => {
    expect(list.addFirst).toBeDefined();
    list.addFirst(2);
    expect(list.getFirst()).toBe(2);
  });
  //2, 3
  it('should have a functioning addLast method', () => {
    expect(list.addLast).toBeDefined();
    list.addLast(5);
    expect(list.addLast()).toBe(5);
  });
  //2, 3, 5
  it('should have a functioning getFirst method', () => {
    expect(list.getFirst).toBeDefined();
    expect(list.getFirst()).toBe(2);
    list.addFirst(1);
    expect(list.getFirst()).toBe(1);
  });
  //1, 2, 3, 5
  it('should have a functioning getLast method', () => {
    expect(list.getLast).toBeDefined();
    expect(list.getLast()).toBe(5);
    list.addLast(9);
    expect(list.getLast()).toBe(9);
  });
  //1, 2, 3, 5, 9
  it('should have a functioning removeFirst method', () => {
    expect(list.removeFirst).toBeDefined();
    expect(list.removeFirst()).toBe(1);
    expect(list.getFirst()).toBe(2);
  });
  //2, 3, 5, 9
  it('should have a functioning removeLast method', () => {
    expect(list.removeLast).toBeDefined();
    expect(list.removeLast()).toBe(9);
    list.addLast(20);
    expect(list.getLast()).toBe(20);
  });
  //2, 3, 5, 20
  it('should have a functioning size method', () => {
    expect(list.size).toBeDefined();
    expect(list.size()).toBe(4);
    list.addLast(50);
    expect(list.size()).toBe(5);
    list.addFirst(25);
    expect(list.size()).toBe(6);
    list.removeFirst();
    expect(list.size()).toBe(5);
    list.removeLast();
    expect(list.size()).toBe(4);
  });
});