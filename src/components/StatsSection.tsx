import { Building, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "30+",
    label: "Years of Experience",
  },
  {
    icon: Building,
    value: "500+",
    label: "Completed Projects",
  },
  {
    icon: Users,
    value: "150+",
    label: "Team Members",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Numbers Speak
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
