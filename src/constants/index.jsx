import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
    { label: "Fonctionnalités", href: "#" },
    { label: "Flux de travail", href: "#" },
    { label: "Tarifs", href: "#" },
    { label: "Témoignages", href: "#" },
];

export const testimonials = [
    {
        user: "John Doe",
        company: "Stellar Solutions",
        image: user1,
        text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a dépassé mes attentes.",
    },
    {
        user: "Jane Smith",
        company: "Blue Horizon Technologies",
        image: user2,
        text: "Je ne pourrais pas être plus heureuse du résultat de notre projet. La créativité et les compétences en résolution de problèmes de l'équipe ont été déterminantes pour concrétiser notre vision.",
    },
    {
        user: "David Johnson",
        company: "Quantum Innovations",
        image: user3,
        text: "Travailler avec cette entreprise a été un plaisir. Leur attention aux détails et leur engagement envers l'excellence sont remarquables. Je les recommande vivement à quiconque recherche un service de premier ordre.",
    },
    {
        user: "Ronee Brown",
        company: "Fusion Dynamics",
        image: user4,
        text: "Travailler avec l'équipe de XYZ Company a été un véritable tournant pour notre projet. Leur attention aux détails et leurs solutions innovantes nous ont aidés à atteindre nos objectifs plus rapidement que prévu. Nous sommes reconnaissants pour leur expertise et leur professionnalisme !",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Creations",
        image: user5,
        text: "Je suis impressionné par le niveau de professionnalisme et de dévouement de l'équipe. Ils ont réussi à dépasser nos attentes et à livrer des résultats exceptionnels.",
    },
    {
        user: "Emily Davis",
        company: "Synergy Systems",
        image: user6,
        text: "L'équipe a fait des efforts considérables pour garantir le succès de notre projet. Leur expertise et leur dévouement sont incomparables. J'ai hâte de travailler à nouveau avec eux à l'avenir.",
    },
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: "Interface de Glisser-Déposer",
        description:
            "Concevez et organisez facilement vos environnements VR avec une interface conviviale de glisser-déposer.",
    },
    {
        icon: <Fingerprint />,
        text: "Compatibilité Multi-Plateformes",
        description:
            "Créez des applications VR qui fonctionnent parfaitement sur plusieurs plateformes, y compris mobile, bureau et casques VR.",
    },
    {
        icon: <ShieldHalf />,
        text: "Modèles Intégrés",
        description:
            "Lancez vos projets VR rapidement avec une variété de modèles intégrés pour différents types d'applications et d'environnements.",
    },
    {
        icon: <BatteryCharging />,
        text: "Aperçu en Temps Réel",
        description:
            "Apercevez votre application VR en temps réel au fur et à mesure que vous apportez des modifications, permettant des itérations et des ajustements rapides.",
    },
    {
        icon: <PlugZap />,
        text: "Outils de Collaboration",
        description:
            "Travaillez ensemble avec votre équipe en temps réel sur des projets VR, facilitant la collaboration et le partage d'idées.",
    },
    {
        icon: <GlobeLock />,
        text: "Tableau de Bord d'Analyse",
        description:
            "Obtenez des informations précieuses sur les interactions et le comportement des utilisateurs au sein de vos applications VR avec un tableau de bord d'analyse intégré.",
    },
];

export const checklistItems = [
    {
        title: "Fusion de code simplifiée",
        description:
            "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
    },
    {
        title: "Examinez le code sans souci",
        description:
            "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
    },
    {
        title: "Assistance IA pour gagner du temps",
        description:
            "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
    },
    {
        title: "Partage de travail en quelques minutes",
        description:
            "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
    },
];

export const pricingOptions = [
    {
        title: "Gratuit",
        price: "0 €",
        features: ["Partage de tableau privé", "5 Go de stockage", "Analyse web", "Mode privé"],
    },
    {
        title: "Pro",
        price: "10 €",
        features: [
            "Partage de tableau privé",
            "10 Go de stockage",
            "Analyse web (Avancée)",
            "Mode privé",
        ],
    },
    {
        title: "Entreprise",
        price: "200 €",
        features: [
            "Partage de tableau privé",
            "Stockage illimité",
            "Réseau haute performance",
            "Mode privé",
        ],
    },
];

export const resourcesLinks = [
    { href: "#", text: "Commencer" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutoriels" },
    { href: "#", text: "Référence API" },
    { href: "#", text: "Forums de la communauté" },
];

export const platformLinks = [
    { href: "#", text: "Fonctionnalités" },
    { href: "#", text: "Appareils compatibles" },
    { href: "#", text: "Exigences système" },
    { href: "#", text: "Téléchargements" },
    { href: "#", text: "Notes de version" },
];

export const communityLinks = [
    { href: "#", text: "Événements" },
    { href: "#", text: "Rencontres" },
    { href: "#", text: "Conférences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Offres d'emploi" },
];
