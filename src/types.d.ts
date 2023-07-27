interface Project {
  id: string;
  fields: {
    Name: string;
    JobType: string;
    Description: string;
    DescriptionValue: string[];
    Type: string;
    TypeValue: string[];
    Example: string;
    ExampleValue: string[];
  };
}
