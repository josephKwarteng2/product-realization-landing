import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { targetAudiences } from "@/data/audience";
import * as Icons from "lucide-react";

export default function TargetAudience() {
  return (
    <section id="audience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">
            Who We Serve
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for <span className="text-blue-600">Innovators</span> Like You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with visionaries across industries who are ready to
            transform their ideas into impactful digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetAudiences.map((audience, index) => {
            const IconComponent = Icons[
              audience.icon as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {IconComponent && (
                          <IconComponent className="h-7 w-7 text-white" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {audience.title}
                        </CardTitle>
                        <CardDescription>
                          {audience.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">
                        Common Challenges:
                      </h4>
                      <ul className="space-y-2">
                        {audience.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-red-500 mr-2 mt-1">✗</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium text-blue-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span> We
                          solve these challenges
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
