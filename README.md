#include <iostream>
#include <chrono>
#include <thread>
using namespace std;

// Function to simulate typing effect
void typeWriter(const string& text, int delay = 50) {
    for (char c : text) {
        cout << c << flush;
        this_thread::sleep_for(chrono::milliseconds(delay));
    }
    cout << endl;
}

int main() {
    string choice;

    // Landing Page
    typeWriter("so hi...? how you doin? i kinda have been mean to tell you something, will you hear it?");
    cout << "\n[yes, tell me plz]\n";
    cout << "Enter your choice: ";
    getline(cin, choice);

    if (choice != "yes" && choice != "tell me plz") {
        typeWriter("aww, maybe another time then... :(");
        return 0;
    }

    // Page 2
    cout << "\n";
    typeWriter("im not great at saying these things face-to-face, so... i thought i'd try this instead.... i.... ive been thinking about you a lot lately", 50);

    typeWriter("you know, ive been holding back these feelings for quite some time, and honestly, its been driving me crazy. every time i see you, talk to you, or even just think about you, there's this little voice in my head telling me, \u201cdon’t let this slip away.\u201d you're so incredibly beautiful—not just in the way you look but in everything you do.\n\n", 50);

    typeWriter("i love how your face lights up when you talk about the things that excite you. the way your passion comes through, how your words tumble out because you're just that invested—it's one of the most beautiful things ive ever witnessed. i can only imagine the sparkle in your eyes when you talk like that, even though i haven’t had the privilege of seeing it up close. but i just know it's magical—like the kind of shine that could stop time, round and bright, drawing me in without even trying.\n\n", 50);

    typeWriter("and then there's your smile. your smile is like the first ray of sunlight after a long storm—warm, soft, and so comforting that it makes everything else fade into the background. it's addictive, really.\n\n", 50);

    typeWriter("you’re always in my mind. it’s like you’ve taken up permanent residence in my thoughts, my dreams, and my prayers. every time i open my eyes in the morning, you’re there. when i close them at night, you’re still there. i miss you constantly, even when you’re right in front of me, because somehow, it’s never enough.\n\n", 50);

    typeWriter("and every time i see you, there’s this overwhelming urge to just hold you close. i want to hug you, not just because it feels like the natural thing to do, but because i want you to feel how much you mean to me. i want to whisper all the things i’ve been too scared to say out loud. but i haven’t done that—not because i don’t want to, but because i respect you too much to put you in an uncomfortable position. i know there’s no string tying us together right now, and i would never want to make you feel like you owe me something.\n\n", 50);

    typeWriter("but keeping this all to myself? it’s exhausting. it’s like standing outside an ice cream shop, staring at the most perfect ice cream you’ve ever seen—the one you’ve been craving for ages—but you can’t have it because you didn’t bring your wallet. it’s frustrating, heartbreaking even, to want something so much and not be able to have it.\n\n", 50);

    typeWriter("so here i am, ready to step into that shop. metaphorical wallet in hand, prepared to give this my all. i’m not just here because i want to hold you, though i’ll be honest, i do. but more than that, i want to be the one who gets to see you, hear you, and support you through everything. i want to be the one who gets to laugh with you, cry with you, and share all the little moments that make life so incredible.\n\n", 50);

    typeWriter("i want to be the guy who gets to stand beside you—not just as a fleeting thought or a passing phase, but as someone you can count on. someone you can trust. someone who will cherish you, not just for who you are but for everything you bring to the world.\n\n", 50);

    typeWriter("so this is me, putting my heart on the line, asking you to let me in. i’m not perfect, and i can’t promise to never mess up, but i can promise to always try my best for you. to always treat you with the kindness, respect, and love you deserve.\n\n", 50);

    typeWriter("so, would you let me? would you let me be the one who gets to call you mine?", 50);

    // Decision
    cout << "\n[1] yes\n[2] no\n";
    cout << "Enter your choice: ";
    getline(cin, choice);

    if (choice == "1") {
        typeWriter("you said yes...? omg, you’ve just made me the happiest person alive! thank you for trusting me. :)");
    } else {
        typeWriter("i understand. thank you for listening to me, though. i really appreciate it. :)");
    }

    return 0;
}
