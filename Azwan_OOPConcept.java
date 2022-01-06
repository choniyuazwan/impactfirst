interface Detail {
  void getDetail();
}

class Employee implements Detail {
    String name, id, department;
    
    public Employee(String name, String id, String department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }

    protected void introName() {
        System.out.println("Hi, my name is " + this.name + " with ID " + this.id + ".");
    }

    protected void introDepartment() {
        System.out.println("I'm in the department " + this.department + ".");
    }

    public void getDetail() {
        introName();
        introDepartment();
    }
}

class Secretary extends Employee {
    public Secretary(String name, String id, String department) {
        super(name, id, department);
    }

    public void getDetail() {
        introName();
        introDepartment();
        System.out.println("My role is Secretary.");
    }

    public void printDocument() {
        System.out.println("All right, give me 5 minutes and I'll give the document to you as soon as possible.");
    }

    public void sendDocument() {
        System.out.println("All right, I'll give it to you via email.");
    }
}

class Manager extends Employee {
    String responsibility;
    
    public Manager(String name, String id, String department, String responsibility) {
        super(name, id, department);
        this.responsibility = responsibility;
    }
    
    public void getDetail() {
        introName();
        introDepartment();
        System.out.println("My role is Manager with responsibility " + this.responsibility + ".");
    }

    public void management() {
        System.out.println("Here my management functions: \nplanning, organizing, leading and controlling");
    }
}

class Developer extends Employee {
    String backendTool, frontendTool;
    
    public Developer(String name, String id, String department, String backendTool, String frontendTool) {
        super(name, id, department);
        this.backendTool = backendTool;
        this.frontendTool = frontendTool;
    }
    
    public void getDetail() {
        introName();
        introDepartment();
        System.out.println("My role is Developer.");
        System.out.println("I'm using " + this.backendTool + " as backend and " + this.frontendTool + " as frontend.");
    }
}

class Azwan_OOPConcept {
    public static void main(String[] args) {
        Employee employee = new Employee("a", "b", "c");
        employee.getDetail();
        System.out.println();

        Secretary secretary = new Secretary("d", "e", "f");
        secretary.getDetail();
        secretary.printDocument();
        secretary.sendDocument();
        System.out.println();

        Manager manager = new Manager("g", "h", "i", "j");
        manager.getDetail();
        manager.management();
        System.out.println();

        Developer developer = new Developer("k", "l", "m", "n", "o");
        developer.getDetail();
    }
}