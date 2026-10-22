import {
  Laptop,
  Smartphone,
  Wifi,
  ShieldCheck,
  Code2,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'computer',
    icon: Laptop,
    title: 'Computer Problems',
    description: 'Troubleshoot slow performance, boot issues, software crashes and hardware glitches.',
    color: 'techblue',
  },
  {
    id: 'smartphone',
    icon: Smartphone,
    title: 'Smartphone Problems',
    description: 'Fix battery drain, storage issues, app crashes and connectivity problems on mobile.',
    color: 'cyan',
  },
  {
    id: 'internet',
    icon: Wifi,
    title: 'Internet & Networking',
    description: 'Resolve Wi-Fi dropouts, slow speeds, DNS errors and router configuration issues.',
    color: 'techblue',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Protect your accounts, recognize phishing and secure your devices from threats.',
    color: 'cyan',
  },
  {
    id: 'programming',
    icon: Code2,
    title: 'Programming',
    description: 'Get started with coding, understand key concepts and debug common errors.',
    color: 'techblue',
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description: 'Understand AI, machine learning and how these technologies shape the modern world.',
    color: 'cyan',
  },
];

export interface Article {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 'a1',
    category: 'Computer Problems',
    categoryColor: 'techblue',
    title: 'Why Is My Laptop So Slow?',
    description: 'Discover the most common causes of sluggish performance and practical steps to speed up your laptop without buying new hardware.',
    readTime: '5 min read',
  },
  {
    id: 'a2',
    category: 'Internet & Networking',
    categoryColor: 'cyan',
    title: 'Wi-Fi Connected But No Internet',
    description: 'Understand what this confusing message means and follow a clear checklist to get back online in minutes.',
    readTime: '4 min read',
  },
  {
    id: 'a3',
    category: 'Cybersecurity',
    categoryColor: 'cyan',
    title: 'How To Protect Your Accounts From Hackers',
    description: 'Learn the essential habits that keep your online accounts safe — from strong passwords to two-factor authentication.',
    readTime: '6 min read',
  },
  {
    id: 'a4',
    category: 'Smartphone Problems',
    categoryColor: 'techblue',
    title: 'Why Is My Phone Storage Always Full?',
    description: 'Find out what is secretly consuming your storage and learn how to reclaim gigabytes of space in a few simple taps.',
    readTime: '3 min read',
  },
  {
    id: 'a5',
    category: 'Computer Problems',
    categoryColor: 'techblue',
    title: 'How To Fix Common Windows Problems',
    description: "A practical walkthrough of the most frequent Windows issues — from blue screens to updates that won't install.",
    readTime: '7 min read',
  },
  {
    id: 'a6',
    category: 'Programming',
    categoryColor: 'cyan',
    title: 'How To Start Learning Programming',
    description: 'A beginner-friendly roadmap for choosing your first language, setting up tools and writing your first lines of code.',
    readTime: '8 min read',
  },
];

export interface AITopic {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aiTopics: AITopic[] = [
  {
    id: 'ai1',
    icon: BrainCircuit,
    title: 'What is Artificial Intelligence?',
    description: 'AI is the field of building computer systems that can perform tasks normally requiring human intelligence — like recognising images, understanding language and making decisions.',
  },
  {
    id: 'ai2',
    icon: Code2,
    title: 'What is Machine Learning?',
    description: 'Machine Learning is a branch of AI where computers learn patterns from large amounts of data instead of being explicitly programmed for every scenario.',
  },
  {
    id: 'ai3',
    icon: Smartphone,
    title: 'How AI is Changing Technology',
    description: 'From voice assistants to medical diagnosis, AI is reshaping how we interact with devices and how software solves real-world problems.',
  },
];

export interface TechTip {
  id: string;
  icon: LucideIcon;
  title: string;
}

export const techTips: TechTip[] = [
  { id: 't1', icon: ShieldCheck, title: 'Keep your software updated' },
  { id: 't2', icon: ShieldCheck, title: 'Use strong and unique passwords' },
  { id: 't3', icon: Laptop, title: 'Back up important files' },
  { id: 't4', icon: ShieldCheck, title: 'Avoid suspicious links' },
  { id: 't5', icon: Smartphone, title: 'Keep enough storage space available' },
  { id: 't6', icon: ShieldCheck, title: 'Use two-factor authentication' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI & ML', href: '#ai-ml' },
  { label: 'Tech Tips', href: '#tech-tips' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
