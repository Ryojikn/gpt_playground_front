import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand, Wand2 } from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
    return (
    <div className="min-h-screen flex flex-col">
        <div className="px-6 pv-3 flex items-center justify-between border-h">
            <h1 className="text-xl font-bold">generative ai playground</h1>
        
            <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">desenvolvido com 💜</span>

                <Separator orientation="vertical" className="h-6" />
                <a href="https://github.com/Ryojikn/gpt_playground_front" target="_blank">
                <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Github
                </Button>
                </a>
            </div>
        </div>

        <main className="flex-1 p-6 flex gap-6">
            <div className="flex flex-col flex-1 gap-4">
                <div className="grid grid-rows-2 gap-4 flex-1">
                    <Textarea className="resize-none p-4 leading-relaxed" placeholder="Inclua o prompt para a IA..." />
                    <Textarea className="resize-none p-4 leading-relaxed" placeholder="Resultado gerado pela IA..." readOnly />
                </div>
                
                <p className="text-sm text-muted-foreground">
                    Lembre-se: você pode utilizar a variável <code className="text-violet-400">{"{transcription}"}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
                </p>
            </div>

            <aside className="w-80 space-y-6">
                <form className="space-y-6">
                    <Label htmlFor="video" className="h-24 border flex rounded-md cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
                        Selecione um video
                        <FileVideo className="w-4 h-4"></FileVideo>
                    </Label>
                    <input type="file" id="video" accept="video/mp4" className="sr-only" />

                    <Separator />

                    <div className="space-y-2">
                        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
                        <Textarea id="transcription_prompt" className="h-10 text-xs leading-relaxed resize-none" placeholder="Inclua palavras chave mencionadas no vídeo separadas por vírgula (,)"/>
                    </div>
                    <Button type="submit" className="w-full">
                        Carregar video
                        <Upload className="w-4 h-4 ml-2" />
                    </Button>
                </form>

                <Separator />
                <form className="space-y-6">
                <div className="space-y-2">
                        <Label>Prompt</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um prompt..."/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="title">Titulo do YouTube</SelectItem>
                                <SelectItem value="description">Descrição do YouTube</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Modelo</Label>
                        <Select defaultValue="gpt-3.5">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gpt-3.5">GPT 3.5 Turbo 16k</SelectItem>
                                <SelectItem value="gpt-4">GPT 4</SelectItem>
                            </SelectContent>
                        </Select>
                        <span className="block text-xs text-muted-foreground italic">Você pode selecionar o modelo.</span>
                    </div>

                    <div className="space-y-2">
                        <Label>Temperatura</Label>
                        <Slider min={0} max={1} step={0.1}></Slider>
                        <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                    </div>

                    <Separator />

                    <Button type="submit" className="w-full">
                        Executar
                        <Wand2 className="w-4 h-4 ml-2" />
                    </Button>
                </form>

            </aside>
        </main>


    </div>
    
    )
}