import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Github, Download } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { ThemeChanger } from '@/components/ui/theme-changer';

export default function Portfolio() {
    const experienceTime = new Date().getFullYear() - 2021;
    const teamSize = 15;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-foreground fade-in">Alisson Luan de Lima Peloso</h1>
                        <div className="hidden md:flex space-x-8">
                            <a href="#about" className="nav-link text-muted-foreground hover:text-primary">
                                About
                            </a>
                            <a href="#experience" className="nav-link text-muted-foreground hover:text-primary">
                                Experience
                            </a>
                            <a href="#skills" className="nav-link text-muted-foreground hover:text-primary">
                                Skills
                            </a>
                            <a href="#contact" className="nav-link text-muted-foreground hover:text-primary">
                                Contact
                            </a>

                            <Button variant="outline" size="sm" className="scale-on-hover border-primary/20 hover:border-primary/40 bg-transparent hover:bg-secondary hover:text-primary" asChild>
                                <a href="/curriculum.pdf" download className="flex items-center gap-2">
                                    <Download className="w-4 h-4"/> Resume PDF
                                </a>
                            </Button>

                            <ThemeChanger/>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4 text-center">
                    {/*Avatar*/}
                    <Avatar className="mx-auto mb-8 w-36 h-36 rounded-full border-4 border-primary glow-effect scale-on-hover">
                        <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-full"/>
                    </Avatar>

                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance slide-up">
                        Tech Lead & Full-Stack Developer
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty fade-in">
                        Computer Science graduate with over {experienceTime} years of full-stack development experience, excelling as a team member, leader, and technical lead.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect scale-on-hover cursor-pointer">
                            <a href="#contact" className="flex items-center gap-2">
                                Get In Touch <ExternalLink className="w-4 h-4"/>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="scale-on-hover border-primary/20 hover:border-primary/40 bg-transparent hover:text-primary cursor-pointer">
                            <a href="#experience" className="flex items-center gap-2">
                                View Experience
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-foreground mb-8 text-center slide-up">About Me</h3>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="fade-in">
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    I'm a passionate full-stack developer with expertise in PHP 8+, Laravel, Vue, and modern cloud technologies. Currently serving as Tech Lead at Optidata Cloud, I lead a team of {teamSize}+ developers while driving technical architecture decisions and ensuring scalable solutions.
                                </p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    My experience spans from developing comprehensive workspace platforms to implementing real-time features with WebSockets, managing multi-tenant architectures, and optimizing performance across cloud environments.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4"/> <span>Chapecó, SC, Brazil</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="w-4 h-4"/> <span>+55 (49) 98431-6738</span>
                                    </div>
                                </div>
                            </div>
                            <Card className="scale-on-hover glow-effect"> <CardHeader> <CardTitle>Education</CardTitle>
                            </CardHeader> <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground">Bachelor's Degree in Computer Science</h4>
                                    <p className="text-muted-foreground">UFFS, Chapecó, Brazil</p>
                                    <p className="text-sm text-muted-foreground">2019 - 2023</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Technical Course in Administration</h4>
                                    <p className="text-muted-foreground">Olavo, Concórdia, Brazil</p>
                                    <p className="text-sm text-muted-foreground">2016 - 2018</p>
                                </div>
                            </CardContent> </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-muted/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-foreground mb-12 text-center slide-up">Work Experience</h3>
                        <div className="space-y-8">
                            <Card className="scale-on-hover glow-effect transition-all duration-300"> <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-primary">Tech Lead and Full-Stack Developer</CardTitle>
                                        <CardDescription>Optidata Cloud • March 2023 - Present</CardDescription>
                                    </div>
                                    <Badge variant="secondary">Current</Badge>
                                </div>
                            </CardHeader> <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Leading a team of {teamSize}+ developers in developing comprehensive workspace platforms with seamless integrations between applications like File Manager, Chat, Video Conferencing, and Business Social Network.
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Contributed to architectural decisions and technical direction</li>
                                    <li>Managed deployment processes and production environments</li>
                                    <li>Optimized application performance and enhanced user experience</li>
                                    <li>Fostered collaborative and growth-oriented team culture</li>
                                </ul>
                            </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect transition-all duration-300"> <CardHeader>
                                <CardTitle>Junior Software Developer</CardTitle>
                                <CardDescription>Optidata Cloud • October 2022 - March 2023</CardDescription>
                            </CardHeader> <CardContent>
                                <p className="text-muted-foreground">
                                    Assisted in developing key features and integrations for the workspace platform, gaining experience in Laravel, Vue, and multi-region cloud environments.
                                </p>
                            </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect transition-all duration-300"> <CardHeader>
                                <CardTitle>Development Team Leader</CardTitle>
                                <CardDescription>Practice UFFS • February 2022 - October 2022</CardDescription>
                            </CardHeader> <CardContent>
                                <p className="text-muted-foreground">
                                    Led a team of five developers, focused on technical mentorship and professional development in a university program to expand technology and innovation in the academic field.
                                </p>
                            </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect transition-all duration-300"> <CardHeader>
                                <CardTitle>Full Stack Developer</CardTitle>
                                <CardDescription>Practice UFFS • March 2021 - October 2022</CardDescription>
                            </CardHeader> <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Developed and maintained several applications for the academic environment:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>
                                        <strong>Mural:</strong> Web platform for service requests from the academic community
                                    </li>
                                    <li>
                                        <strong>Forms:</strong> Platform for creating quick forms with real-time response tracking
                                    </li>
                                    <li>
                                        <strong>Maker:</strong> Content creation platform for brochures and banners
                                    </li>
                                    <li>
                                        <strong>Practice App:</strong> Mobile app centralizing Practice services
                                    </li>
                                </ul>
                            </CardContent> </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-foreground mb-12 text-center slide-up">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">Backend Development</CardTitle> </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">PHP 8+</Badge> <Badge variant="outline">Laravel</Badge>
                                        <Badge variant="outline">PostgreSQL</Badge>
                                        <Badge variant="outline">Redis</Badge> <Badge variant="outline">SQLite</Badge>
                                        <Badge variant="outline">REST API</Badge>
                                    </div>
                                </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">Frontend Development</CardTitle> </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Vue.js</Badge>
                                        <Badge variant="outline">React.js</Badge>
                                        <Badge variant="outline">Livewire</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                        <Badge variant="outline">HTML/CSS</Badge>
                                    </div>
                                </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">DevOps & Cloud</CardTitle> </CardHeader> <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Docker</Badge> <Badge variant="outline">Kubernetes</Badge>
                                    <Badge variant="outline">Multi-tenancy</Badge>
                                    <Badge variant="outline">Multi-region</Badge>
                                    <Badge variant="outline">Caching</Badge>
                                </div>
                            </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">Real-time & Performance</CardTitle> </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">WebSockets</Badge>
                                        <Badge variant="outline">Workers</Badge>
                                        <Badge variant="outline">Async Jobs</Badge>
                                        <Badge variant="outline">Performance Optimization</Badge>
                                    </div>
                                </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">Architecture & Practices</CardTitle> </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Clean Architecture</Badge>
                                        <Badge variant="outline">Clean Code</Badge>
                                        <Badge variant="outline">Scrum</Badge>
                                        <Badge variant="outline">Git/GitHub</Badge>
                                    </div>
                                </CardContent> </Card>

                            <Card className="scale-on-hover glow-effect fade-in"> <CardHeader>
                                <CardTitle className="text-lg">Languages</CardTitle> </CardHeader> <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Portuguese</span> <Badge>Native</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">English</span> <Badge>Advanced</Badge>
                                    </div>
                                </div>
                            </CardContent> </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-muted/10 to-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-foreground mb-8 slide-up">Get In Touch</h3>
                        <p className="text-muted-foreground mb-8 text-pretty fade-in">
                            I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. Feel free to reach out!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 fade-in">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect scale-on-hover cursor-pointer">
                                <a href="mailto:alisson.luan2000@gmail.com" className="flex items-center gap-2">
                                    <Mail className="w-4 h-4"/> Email Me
                                </a>
                            </Button>

                            <Button variant="outline" size="lg" className="scale-on-hover border-primary/20 hover:border-primary/40 bg-transparent hover:text-primary cursor-pointer">
                                <a
                                    href="https://www.linkedin.com/in/alissonluanpeloso/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Linkedin className="w-4 h-4"/> LinkedIn
                                </a>
                            </Button>

                            <Button variant="outline" size="lg" className="scale-on-hover border-primary/20 hover:border-primary/40 bg-transparent hover:text-primary cursor-pointer">
                                <a
                                    href="https://github.com/alissonpeloso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4"/> GitHub
                                </a>
                            </Button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center text-muted-foreground fade-in">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4"/> <span>alisson.luan2000@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4"/> <span>+55 (49) 98431-6738</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-muted-foreground fade-in">
                        © 2024 Alisson Luan de Lima Peloso
                    </p>
                </div>
            </footer>
        </div>
    );
}
