"use client";
import { Button } from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function ContactPage() {
    const pathname = usePathname();
    const pageTitle = pathname.split("/").pop();

    return (
        <div id="pret" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
                La page de <span className={"text-green-500"}>{pageTitle}</span> est en construction</h2>
            <div className="mt-8">
                <Link href="/">
                    <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                        Retour à la page principale
                    </Button>
                </Link>
            </div>
        </div>
    );
}