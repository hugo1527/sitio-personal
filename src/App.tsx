import React from 'react';
import { motion } from 'motion/react';
import { Layout } from './layouts/Layout';
import { LinkButton } from './components/LinkButton';
import { UserProfile, LinkItem } from './types';

// Profile data for Debora including professional email
const profileData: UserProfile = {
  name: "Dra. Debora Sayavedra",
  title: "Abogada de Estudio Jurídico",
  firm: "Asesoría Legal Integral & Académica",
  bio: "Especialista en Derecho Civil, Comercial y de Familia. Comprometida con brindar soluciones jurídicas claras y capacitar a la próxima generación de profesionales del derecho.",
  location: "Buenos Aires, Argentina",
  email: "contacto@estudiodebora.com.ar"
};

// Distinct links, courses, social media, and whatsapp
const linksData: LinkItem[] = [
  {
    id: "whatsapp-consultation",
    title: "Presione Aquí Para Iniciar Consulta Legal",
    description: "Atención inmediata para asesoramientos corporativos, audiencias procesales y redacción contractual.",
    url: "https://wa.me/5491112345678?text=Hola%20Dra.%20Debora%20Sayavedra,%20necesito%20realizar%20una%20consulta%20legal",
    type: "whatsapp",
    icon: "whatsapp"
  },
  {
    id: "course-contracts",
    title: "Curso Práctico: Redacción de Contratos Civil y Comercial",
    subtitle: "Programa Intensivo de 4 Semanas",
    description: "Aprenda las cláusulas críticas, garantías e interpretación paso a paso desde el ejercicio diario del buffet.",
    url: "https://www.example.com/cursos/redaccion-contratos",
    type: "course",
    icon: "graduation",
    badge: "Inscripciones Abiertas",
    price: "Matrícula Bonificada - 50% Especial"
  },
  {
    id: "course-civil",
    title: "Curso Práctico: Litigio Procesal para Graduados",
    subtitle: "Taller de Práctica Profesional",
    description: "Fórmese en confección de demandas, contestaciones, mediaciones y simulación de audiencias.",
    url: "https://www.example.com/cursos/litigio-civil-comercial",
    type: "course",
    icon: "book",
    badge: "Nueva Cohorte",
    price: "Acceso ilimitado + Certificación Oficial"
  },
  {
    id: "course-agreements",
    title: "Taller Avanzado: Negociación Civil Avanzada",
    subtitle: "Resolución Extrajudicial de Conflictos",
    description: "Estrategias procesales de autocomposición para cerrar acuerdos confiables y evitar los plazos judiciales.",
    url: "https://www.example.com/cursos/negociacion-convenios",
    type: "course",
    icon: "graduation",
    price: "Matrícula Disponible"
  },
  {
    id: "linkedin-profile",
    title: "LinkedIn Profesional",
    description: "Historial curricular, publicaciones institucionales",
    url: "https://www.linkedin.com",
    type: "social",
    icon: "linkedin"
  },
  {
    id: "instagram-profile",
    title: "Instagram Jurídico",
    description: "Jurisprudencia explicada, novedades de leyes",
    url: "https://www.instagram.com",
    type: "social",
    icon: "instagram"
  }
];

// Motion staggered container animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } }
};

export default function App() {
  const courseLinks = linksData.filter(link => link.type === 'course');
  const communicationLinks = linksData.filter(link => link.type !== 'course');

  return (
    <Layout profile={profileData}>
      {/* Editorial block layout inside Layout */}
      <motion.div
        id="links-sections-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Section 1: Formación & Cursos */}
        <div>
          <h2 className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-4">
            Formación & Cursos
          </h2>
          <div className="flex flex-col gap-4">
            {courseLinks.map((link) => (
              <motion.div key={link.id} variants={itemVariants}>
                <LinkButton item={link} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Canales de Comunicación */}
        <div>
          <h2 className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-4">
            Canales de Comunicación
          </h2>
          <div className="flex flex-col gap-4">
            {communicationLinks.map((link) => (
              <motion.div key={link.id} variants={itemVariants}>
                <LinkButton item={link} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
