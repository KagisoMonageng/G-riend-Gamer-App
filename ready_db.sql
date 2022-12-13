PGDMP                          z         	   griend_db    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    32793 	   griend_db    DATABASE     l   CREATE DATABASE griend_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_South Africa.1252';
    DROP DATABASE griend_db;
                admin    false            �            1259    49187    comments    TABLE     �   CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    gametag text NOT NULL,
    game_id integer NOT NULL,
    comment text NOT NULL,
    hidden boolean NOT NULL,
    date date NOT NULL,
    image text
);
    DROP TABLE public.comments;
       public         heap    admin    false            �            1259    49186    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public          admin    false    214            
           0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
          public          admin    false    213            �            1259    32795    gamers    TABLE     �  CREATE TABLE public.gamers (
    gamer_id integer NOT NULL,
    gametag character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    gender character varying(50) NOT NULL,
    birthday character varying(50) NOT NULL,
    image character varying(255) NOT NULL,
    friends text[],
    games integer[]
);
    DROP TABLE public.gamers;
       public         heap    postgres    false            �            1259    32794    gamers_gamer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gamers_gamer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.gamers_gamer_id_seq;
       public          postgres    false    210                       0    0    gamers_gamer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.gamers_gamer_id_seq OWNED BY public.gamers.gamer_id;
          public          postgres    false    209            �            1259    32808    games    TABLE       CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text NOT NULL,
    publisher character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    category text,
    screenshots text[],
    full_name text,
    description text,
    url text
);
    DROP TABLE public.games;
       public         heap    postgres    false            �            1259    32807    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.games_game_id_seq;
       public          postgres    false    212                       0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;
          public          postgres    false    211            h           2604    49190    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public          admin    false    213    214    214            f           2604    32798    gamers gamer_id    DEFAULT     r   ALTER TABLE ONLY public.gamers ALTER COLUMN gamer_id SET DEFAULT nextval('public.gamers_gamer_id_seq'::regclass);
 >   ALTER TABLE public.gamers ALTER COLUMN gamer_id DROP DEFAULT;
       public          postgres    false    210    209    210            g           2604    32811    games game_id    DEFAULT     n   ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);
 <   ALTER TABLE public.games ALTER COLUMN game_id DROP DEFAULT;
       public          postgres    false    212    211    212                      0    49187    comments 
   TABLE DATA           ^   COPY public.comments (comment_id, gametag, game_id, comment, hidden, date, image) FROM stdin;
    public          admin    false    214   �       �          0    32795    gamers 
   TABLE DATA           |   COPY public.gamers (gamer_id, gametag, email, name, surname, password, gender, birthday, image, friends, games) FROM stdin;
    public          postgres    false    210   w                 0    32808    games 
   TABLE DATA           t   COPY public.games (game_id, name, publisher, image, category, screenshots, full_name, description, url) FROM stdin;
    public          postgres    false    212   ~                   0    0    comments_comment_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comments_comment_id_seq', 24, true);
          public          admin    false    213                       0    0    gamers_gamer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.gamers_gamer_id_seq', 19, true);
          public          postgres    false    209                       0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.games_game_id_seq', 13, true);
          public          postgres    false    211            r           2606    49194    comments comments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            admin    false    214            j           2606    32806    gamers gamers_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_email_key;
       public            postgres    false    210            l           2606    32804    gamers gamers_gametag_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_gametag_key UNIQUE (gametag);
 C   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_gametag_key;
       public            postgres    false    210            n           2606    32802    gamers gamers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_pkey PRIMARY KEY (gamer_id);
 <   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_pkey;
       public            postgres    false    210            p           2606    32815    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            postgres    false    212               �   x��Qn� D��)� �u\��z�J6ۅ��G��k�s�Fo��E�0B��
��/�8UY}Hwdw<C�dW�Z�ѵ]� �����r3fâ����^z��8�U��	�%4��:��0����`v\*��5�fU<gu"�Tdb�J�<�Dj���|,����؏�a�<==����|�i� ��D�      �   �   x�͏An�0E��,{� �m��DB����-Ti��P�=@w�7_��AE�.���C�~uN��Y��b���&��t�H��I�ݿ��~Wu��FER�9�������c�
Io�:h+�����Q#;������89��B��%`����-�I�0:O�fj::��ў�k���H��n_X��-p���(�?G������7�EiF ����@^q2�t�����A��)
BT�4��S4}F�$����         $
  x��X�r�:]K_��bfcJ"��])��y��Xy-n�
$A	I0(YY�/�O�/�� )Y��;U�H��ӯ��>��Z�l�z��KvͳH�V��e�[
݉RU�2�����7�ZveƗ�[��qw�ƽ����Q��շ�Iò��\��)�f������|8_�0�(��Ųu!�+#�e���.�&5�,���%���F��1�¬��T����o{�Q.�L���fV�i�͊e����%=��(y�2�k�Oڅ�vG���l�ݖkV�Tp��b��x,4m���z���S��j��������
�?�q{кx{1cA�z��Ȕ*���F?�'�I��zA����z��'�T� ��B�p����|��4g�"lnH�2f�ci��[7j+J��R&\���?gl�O��a	�9��}��&aF�K�S|!o%\�T8��״�H���x����8���Z�L%@<WN�1�Jk:�ܱL�����v��"Fbu7�	���L{ں���J��ַPݱKRwn �z���$A2��p����h�&шǣao<���`�����f�\fUjm!wt�sY��i� )��+���Zs�k=�k�M����J���D��F��ଃ��pV�jY�,#פZ�����jK�(��5L�2�a��3B�|�of�3&�=<��6H�X�č\��(�)E�J�ڛT)$���Y��AV�g.R��LQ�)V[���D�މ�{%�%����5��hs��Z2>��ij͐�PA��#3Qk`��	�$V�H�L��U��a�z�%�B��;�o � �� ���^�zSn�
���-`e�8��ƎN.�W���u���e��������gU���K�U�Z{�8��^�GӋ��/��l�3�{�;�-ֺ�˞��D]�o����uW�S�d��e���5cI)�g�gS>�?�R�8>��(�?P{�O�`��xn��~��b�����'�
��N������P�u���Ul �^+i�Q0�ՐE)\�fy\*�|/?���C?�<��Nx$9���h�Z�s�9���	�D{��셕1*��{�h4�c�&pߏ�(���}�<��wM_�F�v��}�<|��E4���t�y)Ѫ	q�Ӿ��~{Ҽv���}�9�_�ı�{n�5�֝���P؃8O����~ݓ���������dЎ�[�R�s/yQ����]1�",l"5i�P���i�~���fL�*�h�\݈�rZ�PG����V��V���Ϋ�dU��m׀���ة@	�l��*D_�����9��t�M����o��`�}�6kz>���]!�+E�$r��U��;g�c�j���aD/��藤�+GS��̇�O跃��*�6O�����~w�&`�������)î��p��IK�uc�R��$�Nӳ?�cw\ic�$;O�?"���h� �+���ˑ�3x�����%���H�=��A���XH�� ��.?�֭ؗ�֔Q��<����t0�<P!�L���W�Rۧ�+C��KP�K�E��z[w͢��]�J?P�$�/��D�j��Ȓ�e~��j\HV�x�]{ïQV��:�����S':�znB���ʷ_\M&1� #�nȲ3V=w;�������poӞ��~�M�����;���pЧ�oS��oP��0{�ֿpu�#Y��$3��6_�#Q].<�����@��=m�p����:	�	T�xwd�P��{
�X��Vj�z�=�����ô��ݸ�/��K����!��2"X��lV�ۮ$�lUP��{�=㵓=��.)�x�$r��c�K6���6 :<R���G�v�D����'`��f]�� ]�L(�z%ԁ�SI�~�,��K�Z��	Y�cO��
��h�4M��+��Ldd���׎Ep~X�4��.�CzNra��A��L@9.�Ȭ�"XMx�*#��0�&4ܱ5�ؖ��S ��Ԅ;M	����t��Q���l�{�����~ro�J��3<&��t��x4鏧�w���O����=x�����jktl�)���nFlŎO7�N%n+Ҥ���*\]Dݶ�%R3�C�v�t��NtEP� ��A6u%�d�n���Y�F������s6��Tuԝ#�D�@y3 �[�����f1��&��`1�Z�Uq�39�ֳ�<NP�u�(&�`y�9������ߓ�4QU�:Ϗ����ě~���
����W�k/��UKP ��gi��!dp=>��i.Y%�y���f��k�
]�m�����y�>�{�p�q��0_�Ni/Z��%�~��x�Ryv��H[������mz��]�>�<����
{y���~$?į$�*��px䯳#�Q^����(zf�\�e�0��[;*ܻ�m�iN���fУ����q�cm��
�cu��yDg:�е�v+�APO����.�I�'�I�~�������n�������(U"��%�m���f���S��E�
��F��<R�ao���ڋꚛ��a'u�Gn����ޱ��"��	nDuW�v��x�TX�::�V]EA����� w���N�vw7v���� l���     